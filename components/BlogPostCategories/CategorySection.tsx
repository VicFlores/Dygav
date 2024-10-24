import { BlogPost } from '@/types';
import { axiosConfig } from '@/utils';
import moment from 'moment';
import { useSession } from 'next-auth/react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useRef, useState } from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';

type BlogPostWithSubCategory = BlogPost & {
  subCategoryName: string | null;
};

type CategorySectionProps = {
  title: string;
  subtitle: string;
  information: string;
  posts: BlogPostWithSubCategory[];
};

const defaultImage =
  'https://multimedia.dygav.es/wp-content/uploads/2024/04/undraw_publish_article_re_3x8h_w41fes.svg';

export const CategorySection: FC<CategorySectionProps> = ({
  title,
  subtitle,
  information,
  posts,
}) => {
  const [favExist, setFavExist] = useState([]);
  const [favIsChanged, setfavIsChanged] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const scrollContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getBlogPostByUserId = async () => {
      try {
        if (session && session.user) {
          const res = await axiosConfig.get(
            `/api/favorites/findFavBlogPostsByUserId?userId=${
              session.user._id || session.user.id
            }`
          );

          setFavExist(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getBlogPostByUserId();
  }, [favIsChanged, session]);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft += 300;
    }
  };

  const formatedTtitle =
    title === 'Consejos y Recursos para Viajeros'
      ? 'Guías de viaje'
      : title === 'Trámites y Legislación para Alquileres Vacacionales'
      ? 'Trámites para licencias turísticas'
      : title === 'Tendencias y Evolución del Alquiler Vacacional'
      ? 'Tendencias sobre alquiler vacacional'
      : title;

  const handleFavAdd = (post: any) => {
    if (session) {
      const addFav = async () => {
        try {
          if (session.user) {
            await axiosConfig.post('/api/favorites/favoriteBlogPosts', {
              userId: session.user._id || session.user.id,
              blogPostId: post.id,
            });

            setfavIsChanged(!favIsChanged);
          }
        } catch (error) {
          console.log(error);
        }
      };

      addFav();
    } else {
      return router.push('/login');
    }
  };

  const handleFavRemove = (post: any) => {
    if (session) {
      const removeFav = async () => {
        try {
          if (session.user) {
            await axiosConfig.delete(`/api/favorites/favoriteBlogPosts`, {
              data: {
                userId: session.user._id || session.user.id,
                blogPostId: post.id,
              },
            });

            // if (setRemovedBlogPost) {
            //   setRemovedBlogPost(Number(post.id));
            // }
          }
        } catch (error) {
          console.log(error);
        }
      };

      removeFav();

      setfavIsChanged(!favIsChanged);
    } else {
      return router.push('/login');
    }
  };

  return (
    <>
      <h2 className='mt-0 md:mt-10 text-2xl md:text-4xl text-center pb-4 font-semibold border-b-4 border-b-p600 w-auto md:px-10'>
        {title}
      </h2>

      <h3 className='mt-6 text-base md:text-lg lg:text-xl text-center text-[#45474B]'>
        {subtitle}
      </h3>

      <p className='mt-10 text-base md:text-lg text-justify md:px-20'>
        {information}
      </p>

      <div className='mt-20 w-full md:px-10 mb-16'>
        <div className='flex items-center justify-center md:space-x-14 overflow-auto overflow-x-visible pb-8'>
          <button
            onClick={scrollLeft}
            className='hidden lg:flex p-2 relative z-10 text-white bg-p600/80 ml-3 -bottom-36'
          >
            <AiOutlineArrowLeft />
          </button>

          <div
            ref={scrollContainer}
            className='w-auto h-auto items-center pb-8 overflow-x-auto overscroll-x-contain flex space-x-6 overflow-y-hidden scrollbar'
          >
            {posts.filter((post) => {
              if (post.subCategoryName) {
                let subCategoryName = post.subCategoryName.replace(
                  /\b\w/g,
                  (char) => char.toUpperCase()
                );
                let formatedTitleCapitalized = formatedTtitle.replace(
                  /\b\w/g,
                  (char) => char.toUpperCase()
                );
                return subCategoryName === formatedTitleCapitalized;
              }
              return false;
            }).length > 0 ? (
              posts
                .filter((post) => {
                  if (post.subCategoryName) {
                    let subCategoryName = post.subCategoryName.replace(
                      /\b\w/g,
                      (char) => char.toUpperCase()
                    );
                    let formatedTitleCapitalized = formatedTtitle.replace(
                      /\b\w/g,
                      (char) => char.toUpperCase()
                    );
                    return subCategoryName === formatedTitleCapitalized;
                  }
                  return false;
                })
                .map((post) => {
                  const disableFav = favExist.some(
                    (fav: any) => Number(fav.blogPostId) === Number(post.id)
                  );
                  return (
                    <div key={post.id}>
                      <div
                        className='relative flex flex-col justify-end min-w-[300px] min-h-[350px]  md:min-w-[494px] md:h-[296px] rounded-xl px-6 pb-6 space-y-2 text-white'
                        style={{
                          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${post.yoast_head_json.og_image[0].url})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
                        }}
                      >
                        <div className='absolute top-0 right-0 z-10 p-6 text-[30px]'>
                          {disableFav ? (
                            <FaHeart
                              onClick={() => handleFavRemove(post)}
                              className='text-p600'
                            />
                          ) : (
                            <FaRegHeart
                              onClick={() => handleFavAdd(post)}
                              className='text-white'
                            />
                          )}
                        </div>

                        <p className='underline'>
                          <Link href={`/post/${post.slug}`}>
                            {post.title.rendered}
                          </Link>
                        </p>
                        <p>{moment(post.date).format('D MMMM, YYYY')}</p>
                      </div>
                    </div>
                  );
                })
            ) : (
              <div>
                <div className='flex flex-col justify-center items-center min-w-[300px] min-h-[350px]  md:min-w-[494px] md:h-[296px] border-2 border-p600 rounded-xl text-p600'>
                  <figure className='relative w-52 h-52 md:w-60 md:h-60 m-auto'>
                    <Image
                      src={defaultImage}
                      layout='fill'
                      priority
                      alt={
                        ' Estamos trabajando para entregarte nuevos articulos'
                      }
                    />
                  </figure>

                  <p className='pb-6 text-center px-4'>
                    Estamos trabajando para entregarte nuevos articulos
                  </p>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={scrollRight}
            className='hidden lg:flex p-2 relative z-10 text-white bg-p600/80 ml-3 -bottom-36'
          >
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};
