import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { jobs } from "@/lib/jobs";
import { prisma } from "@/lib/db";

const SITE = "https://lumera.tech";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();
  const staticUrls: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/careers`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE}/insights`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
  const jobUrls = jobs.map((j) => ({
    url: `${SITE}/careers/${j.slug}`,
    lastModified: j.postedAt,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));
  const serviceUrls = services.map((s) => ({
    url: `${SITE}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  const workUrls = projects.map((p) => ({
    url: `${SITE}/work/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  const posts = await prisma.post.findMany({ where: { published: true } });
  const postUrls = posts.map((p) => ({
    url: `${SITE}/insights/${p.slug}`,
    lastModified: p.updatedAt.toISOString(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));
  return [...staticUrls, ...serviceUrls, ...workUrls, ...jobUrls, ...postUrls];
}
