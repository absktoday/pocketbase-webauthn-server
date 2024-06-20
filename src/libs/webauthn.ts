import { config } from "./config";
import {
  generateRegistrationOptions,
  verifyRegistrationResponse,
} from "@simplewebauthn/server";
import type { PublicKeyCredentialCreationOptionsJSON } from "@simplewebauthn/types";
import { saveRegOptions } from "./kv_client";

export const webauthnRegOptions = async (username: string) => {
  // Generate Reg Options
  const options: PublicKeyCredentialCreationOptionsJSON =
    await generateRegistrationOptions({
      rpName: config.rpName,
      rpID: config.rpID,
      userName: username,
    });

  // Save Options in a KV
  saveRegOptions(options);

  return options;
};

export const webauthnRegister = async () => {};
