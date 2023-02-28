import {
  ApiEntryPoint,
  ApiInterface,
  ApiItem,
  ApiItemKind,
  ApiModel,
  ApiPackage,
} from "@microsoft/api-extractor-model";
import { readdirSync, writeFileSync } from "fs";
import { join } from "path";

for (const file of readdirSync(join(__dirname, "..", "..", "temp"))) {
  if (file.endsWith(".api.json")) {
    createClientInheritedMembersReference(file);
  }
}

function createClientInheritedMembersReference(client) {
  const apiModel: ApiModel = new ApiModel();
  const apiPackage: ApiPackage = apiModel.loadPackage(join(__dirname, "..", "..", "temp", client));

  const inheritedMembersReference = {};

  class InheritedMembersRef {
    constructor(public member: ApiInterface) {}
    toJSON() {
      const membersWithInheritance = this.member.findMembersWithInheritance();
      return Object.fromEntries(
        membersWithInheritance.items.map((memberWithInheritance) => [
          memberWithInheritance.displayName,
          memberWithInheritance.canonicalReference.toString(),
        ])
      );
    }
  }

  function handleApiItem(apiItem: ApiItem) {
    const apiMembers = apiItem.members;
    for (const apiMember of apiMembers) {
      switch (apiMember.kind) {
        case ApiItemKind.Class:
        case ApiItemKind.Enum:
          break;
        case ApiItemKind.Interface:
          const member: ApiInterface = apiMember as ApiInterface;
          if (member.displayName.endsWith("CommandInput")) {
            inheritedMembersReference[member.canonicalReference.toString()] = new InheritedMembersRef(member);
          }
          if (apiMember.displayName.endsWith("CommandOutput")) {
            inheritedMembersReference[member.canonicalReference.toString()] = new InheritedMembersRef(member);
          }
          break;
        case ApiItemKind.Constructor:
        case ApiItemKind.ConstructSignature:
        case ApiItemKind.Method:
        case ApiItemKind.MethodSignature:
        case ApiItemKind.Function:
        case ApiItemKind.Model:
        case ApiItemKind.Namespace:
        case ApiItemKind.Package:
        case ApiItemKind.Property:
        case ApiItemKind.PropertySignature:
        case ApiItemKind.TypeAlias:
        case ApiItemKind.Variable:
          break;
        default:
          throw new Error("Unsupported API item kind: " + apiItem.kind);
      }
    }
  }
  apiPackage.entryPoints.forEach((entryPoint: ApiEntryPoint) => {
    handleApiItem(entryPoint);
    writeFileSync(
      join(__dirname, "..", "..", "temp", client.replace("api.json", "inheritances.json")),
      JSON.stringify(inheritedMembersReference, null, 2)
    );
  });
}
