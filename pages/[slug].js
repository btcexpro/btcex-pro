export async function getStaticPaths({ locales }) {
    const paths = []
  
    locales.forEach((locale, i) => {
      posts.forEach((post, i) => {
        paths.push({ params: { slug: post.id }, locale })
      });
    });
  
    return { paths, fallback: false }
  }