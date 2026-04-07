import { useEffect, useState } from "react";

export default function ProductsLoader() {
  const [Component, setComponent] = useState<any>(null);

  useEffect(() => {
    const load = async () => {
      const module = await import(
        /* @vite-ignore */
        "products/ProductsApp"
      );

      setComponent(() => module.default);
    };

    load();
  }, []);

  return Component ? <Component /> : <div>Loading Products...</div>;
}
