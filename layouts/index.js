import React from 'react';
import { parseISO, format } from 'date-fns'; 
import Container from '../components/Container';
import Subscribe from '../components/Subscribe';
import ViewCounter from '../components/ViewCounter';
import BlogSeo from '../components/BlogSeo';
import Nav from '../components/Nav'
const editUrl = (slug) =>
  `https://github.com/achuthhadnoor/portfolio-next/edit/master/pages/blog/${slug}.mdx`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://achuth.now.sh/blog/${slug}`
  )}`;

export default (frontMatter) => {
  const slug = frontMatter.__resourcePath
    .replace('blog/', '')
    .replace('.mdx', '');

  return ({ children }) => { 
    return (
      <Container>
          <Nav/>
        <BlogSeo url={`https://achuth.now.sh/blog/${slug}`} {...frontMatter} />
        <Stack
          as="article"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
          w="100%"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            w="100%"
          >
            <h1>
              {frontMatter.title}
            </h1>
            <Flex
              justify="space-between"
              align={['initial', 'center']}
              direction={['column', 'row']}
              mt={2}
              w="100%"
              mb={4}
            >
              <Flex align="center">
                <Avatar
                  size="xs"
                  name="Lee Robinson"
                  src="https://bit.ly/33vEjhB"
                  mr={2}
                />
                <Text fontSize="sm" color={textColor[colorMode]}>
                  {frontMatter.by}
                  {'Lee Robinson / '}
                  {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
                </Text>
              </Flex>
              <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
                {frontMatter.readingTime.text}
                {` • `}
                <ViewCounter id={slug} />
              </Text>
            </Flex>
          </Flex>
          {children}
          <Subscribe />
          <Box>
            <Link href={discussUrl(slug)} isExternal>
              {'Discuss on Twitter'}
            </Link>
            {` • `}
            <Link href={editUrl(slug)} isExternal>
              {'Edit on GitHub'}
            </Link>
          </Box>
        </Stack>
      </Container>
    );
  };
};