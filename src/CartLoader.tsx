import { useEffect, useState } from "react";

export default function CartLoader() {
  const [Component, setComponent] = useState<any>(null);

  useEffect(() => {
    const load = async () => {
      const module = await import(
        /* @vite-ignore */
        "cart/CartApp"
      );

      setComponent(() => module.default);
    };

    load();
  }, []);

  return Component ? <Component /> : <div>Loading Cart...</div>;
}
