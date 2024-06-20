import kvjs from "@heyputer/kv.js";
import { PublicKeyCredentialCreationOptionsJSON } from "@simplewebauthn/types";

// Create a new kv.js instance
const kv = new kvjs();

export const saveRegOptions = (
  options: PublicKeyCredentialCreationOptionsJSON
) => {
  kv.set(options.challenge, options, { EX: 30 });
};

export const getRegOptions = (
  challenge: string
): PublicKeyCredentialCreationOptionsJSON => {
  return kv.get(challenge) as PublicKeyCredentialCreationOptionsJSON;
};
