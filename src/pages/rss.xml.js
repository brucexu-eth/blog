import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog', ({ data }) => {
    return data.lang === 'zh' && !data.draft;
  });

  return rss({
    title: '个人博客',
    description: '分享技术思考、项目经验和生活感悟',
    site: context.site,
    items: blog
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/blog/${post.slug}/`,
        categories: post.data.tags,
      })),
    customData: `<language>zh-cn</language>`,
  });
}
