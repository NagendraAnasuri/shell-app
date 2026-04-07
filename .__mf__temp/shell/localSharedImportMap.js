
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    import {loadShare} from "@module-federation/runtime";
    const importMap = {
      
    }
      const usedShared = {
      
    }
      const usedRemotes = [
                {
                  entryGlobalName: "products",
                  name: "products",
                  type: "module",
                  entry: "http://localhost:5001/remoteEntry.js",
                  shareScope: "default",
                }
          ,
                {
                  entryGlobalName: "cart",
                  name: "cart",
                  type: "module",
                  entry: "http://localhost:5002/remoteEntry.js",
                  shareScope: "default",
                }
          
      ]
      export {
        usedShared,
        usedRemotes
      }
      