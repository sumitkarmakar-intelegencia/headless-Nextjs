
import { getAllAuthors } from "@/lib/wordpress";
import { Section, Container, Prose } from "@/components/craft";
import { Metadata } from "next";
import BackButton from "@/components/back";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Authors",
  description: "Browse all authors of our blog posts",
  alternates: {
    canonical: "/posts/authors",
  },
};
const baseUrl = process.env.WORDPRESS_URL;
export default async function Page() {
  const authors = await getAllAuthors();

  const response = await fetch(`${baseUrl}/wp-json/wp/v2/themes`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Basic sumit.karmakar:g4KP8XymJjnud!5`,
    },
  });
  const themes = await response.json();
  console.log(themes);

  return (
    <Section>
      <Container className="space-y-6">
        <Prose className="mb-8">
          <h2>All Authors</h2>
          <ul className="grid">
            {authors.map((author: any) => (
              <li key={author.id}>
                <Link href={`/posts/?author=${author.id}`}>{author.name}</Link>
              </li>
            ))}
          </ul>
        </Prose>
        <BackButton />
      </Container>
    </Section>
  );
}
