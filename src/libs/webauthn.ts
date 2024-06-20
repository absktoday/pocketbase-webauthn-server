import { config } from "./config";
import {
  generateRegistrationOptions,
  verifyRegistrationResponse,
} from "@simplewebauthn/server";
import type { PublicKeyCredentialCreationOptionsJSON } from "@simplewebauthn/types";

export const webauthnRegOptions = async (username: string) => {
  const options: PublicKeyCredentialCreationOptionsJSON =
    await generateRegistrationOptions({
      rpName: config.rpName,
      rpID: config.rpID,
      userName: username,
    });

  // Save Options in a KV

  return options;
};

export const webauthnRegister = async () => {};
