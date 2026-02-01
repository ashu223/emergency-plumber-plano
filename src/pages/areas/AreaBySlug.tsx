import { useMemo } from "react";
import { useParams } from "react-router-dom";
import AreaPage from "./AreaPage";
import NotFound from "@/pages/NotFound";
import { siteConfig } from "@/lib/city.config";

const slugify = (value: string) => value.toLowerCase().replace(/\s+/g, "-");

const AreaBySlug = () => {
  const { slug } = useParams();

  const areaName = useMemo(() => {
    if (!slug) return null;

    // Primary: match against nearbyAreas (what you edit in city.config.ts)
    const nearbyMatch = siteConfig.nearbyAreas.find((a) => slugify(a) === slug);
    if (nearbyMatch) return nearbyMatch;

    // Fallback: match against any explicitly configured areaPages keys
    const configuredMatch = Object.keys(siteConfig.areaPages || {}).find(
      (a) => slugify(a) === slug
    );
    return configuredMatch ?? null;
  }, [slug]);

  if (!areaName) return <NotFound />;
  return <AreaPage areaName={areaName} />;
};

export default AreaBySlug;
