import fs from "fs";
import path from "path";

type GuideMeta = {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
  slug: string;
};

export type GuidePost = GuideMeta & {
  content: string;
};

const guidesDirectory = path.join(process.cwd(), "src/content/guides");

// Ensure directory exists
if (!fs.existsSync(guidesDirectory)) {
    fs.mkdirSync(guidesDirectory, { recursive: true });
}

export function getAllGuides(): GuideMeta[] {
  const fileNames = fs.readdirSync(guidesDirectory);
  const allGuidesData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(guidesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { meta } = parseFrontmatter(fileContents);

    return {
      slug,
      ...meta,
    };
  });

  return allGuidesData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getGuideBySlug(slug: string): GuidePost | null {
  try {
    const fullPath = path.join(guidesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { meta, content } = parseFrontmatter(fileContents);

    return {
      slug,
      content,
      ...meta,
    };
  } catch (_) {
    return null;
  }
}

// Simple Frontmatter Parser (No dependencies)
function parseFrontmatter(fileContent: string): { meta: any; content: string } {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);

  const meta: any = {};
  let content = fileContent;

  if (match) {
    const frontmatterBlock = match[1];
    content = fileContent.replace(match[0], "").trim();

    const frontmatterLines = frontmatterBlock.trim().split("\n");
    frontmatterLines.forEach((line) => {
      const [key, ...valueParts] = line.split(":");
      if (key && valueParts) {
        let value = valueParts.join(":").trim();
        // Remove quotes if present
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.slice(1, -1);
        }
        meta[key.trim()] = value;
      }
    });
  }

  return { meta, content };
}
