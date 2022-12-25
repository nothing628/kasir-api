/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/
import View from "@ioc:Adonis/Core/View";
import Env from "@ioc:Adonis/Core/Env";
import Application from "@ioc:Adonis/Core/Application";
import { readFileSync } from "node:fs";

const getAssetPath = (assetInfo) => {
  const assetPath = "/dist/" + assetInfo.file;

  return assetPath;
};

View.global("env", Env.get("NODE_ENV"));
View.global("assetBuild", function (path: string) {
  if (!path) return "";

  try {
    const manifestJsonPath = Application.publicPath("dist/manifest.json");
    const manifestJsonContent = readFileSync(manifestJsonPath);
    const manifestJson = JSON.parse(manifestJsonContent.toString());

    if (path in manifestJson) {
      const assetInfo = manifestJson[path];

      return getAssetPath(assetInfo);
    }
  } catch {
    //
  }

  return "";
});
