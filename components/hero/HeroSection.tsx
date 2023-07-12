import { IHero } from '../../_lib/types';
import BlockContentRenderer from '../../components/BlockContentRenderer';
import ButtonRenderer from '../../components/ButtonRenderer';
import Image from '../../components/Image';

const HeroSection = (props: IHero) => {
  const { blockContent, image, buttons, layout, opacity, heroBgColor, heroTextColor } = props;

  const textColorStyle = heroTextColor ? { color: heroTextColor.hex } : {};
  const bgColorStyle = heroBgColor ? { backgroundColor: heroBgColor.hex } : {};

  switch (layout) {
    case 'image-bg-center':
      return (
        <div
          key={`${props._key}-image-bg-center`}
          className="relative flex aspect-square max-h-screen w-full items-center justify-center sm:aspect-video"
          style={bgColorStyle}>
          <div className="absolute left-0 top-0 z-10 h-full w-full">
            {image && <Image {...image} className="h-full w-full object-cover" alt="" opacity={opacity} />}
          </div>
          <div className="absolute left-0 top-0 z-20 h-full w-full "></div>
          <div className="z-30 max-w-5xl px-4 text-center" style={textColorStyle}>
            <BlockContentRenderer blockContent={blockContent && blockContent} />
            <div className="mb-2 mt-6 flex h-full flex-wrap items-center justify-center">
              {buttons && buttons.map(btn => <ButtonRenderer key={`${layout}-${btn.callToAction}`} {...btn} />)}
            </div>
          </div>
        </div>
      );
    case 'simple-image-right':
      return (
        <section className="relative md:py-16" style={bgColorStyle}>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-8 md:grid-cols-2 lg:py-16">
            <div className="md:hidden">
              {image && (
                <Image
                  {...image}
                  className="mx-auto mb-8 max-w-sm object-cover md:h-full md:w-full"
                  alt=""
                  opacity={opacity}
                />
              )}
            </div>
            <div
              className="flex flex-col items-center justify-center text-center md:items-start md:text-left"
              style={textColorStyle}>
              <BlockContentRenderer blockContent={blockContent && blockContent} />
              <div className="mt-6 flex flex-shrink items-center justify-center space-x-4 md:-ml-2 md:justify-start">
                {buttons && buttons.map(btn => <ButtonRenderer key={`${layout}-${btn.callToAction}`} {...btn} />)}
              </div>
            </div>
            <div className="hidden md:block">
              {image && <Image {...image} className="h-full w-full object-cover" alt="" opacity={opacity} />}
            </div>
          </div>
        </section>
      );
    case 'image-bg-center-slim':
      return (
        <div
          key={`${props._key}-image-bg-center-slim`}
          className="relative grid grid-cols-1 md:grid-cols-2 h-[700px] lg:h-[1000px] w-full items-center justify-center"
          style={bgColorStyle}
        >
          <div className="absolute left-0 top-0 z-10 h-full w-full">
            {image && (
              <Image
                {...image}
                className=" h-full w-full object-cover"
                alt=""
                opacity={opacity}
              />
            )}
          </div>
          <div
            className="z-30 max-w-2xl px-4 text-center md:col-start-1 md:col-end-2 mx-auto"
            style={textColorStyle}
          >
            <BlockContentRenderer blockContent={blockContent && blockContent} />
            <div className="mb-2 mt-6 -ml-2 flex h-full flex-wrap items-center justify-center">
              {buttons &&
                buttons.map((btn) => (
                  <ButtonRenderer
                    key={`${layout}-${btn.callToAction}`}
                    {...btn}
                  />
                ))}
            </div>
          </div>
          <div className="hidden md:block md:col-start-2 md:col-end-3"></div>
        </div>
      );
      
    case 'image-bg-left-slim':
      return (
        <section className="relative md:py-16" style={bgColorStyle}>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-8 md:grid-cols-2 lg:py-16">
            {/* Move the block with the image above the block with the text */}
            <div className="hidden md:block">
              {image && <Image {...image} className="h-full w-full object-cover" alt="" opacity={opacity} />}
            </div>
      
            <div className="md:hidden">
              {image && (
                <Image
                  {...image}
                  className="mx-auto mb-8 max-w-sm object-cover md:h-full md:w-full"
                  alt=""
                  opacity={opacity}
                />
              )}
            </div>
            
            <div
              className="flex flex-col items-center justify-center text-center md:items-start md:text-left"
              style={textColorStyle}>
              <BlockContentRenderer blockContent={blockContent && blockContent} />
              <div className="mt-6 flex flex-shrink items-center justify-center space-x-4 md:-ml-2 md:justify-start">
                {buttons && buttons.map(btn => <ButtonRenderer key={`${layout}-${btn.callToAction}`} {...btn} />)}
              </div>
            </div>
          </div>
        </section>
      );
      
    case 'circle-overlap-left':
      return (
        <div
          key={`${props._key}-circle-overlap-left`}
          className=" pb-16 md:relative md:z-10 md:px-16"
          style={bgColorStyle}>
          <div className="md:mx-auto md:grid md:max-w-7xl md:grid-cols-3 md:gap-8 md:px-8">
            <div className="relative md:col-span-1 md:-my-8 md:mx-auto">
              <div className="mx-auto mt-8 hidden max-w-md px-4 md:mt-0 md:block md:h-full md:max-w-3xl md:p-0">
                {image && (
                  <Image
                    {...image}
                    className="aspect-square w-80 rounded-full border-2 border-accent object-cover shadow-lg"
                    alt=""
                    opacity={opacity}
                  />
                )}
                <div className="flex justify-center pt-8">
                  {buttons && buttons.map(btn => <ButtonRenderer key={`${layout}-${btn.callToAction}`} {...btn} />)}
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="mx-auto max-w-4xl px-6 pt-16 text-center md:pt-8 md:text-left" style={textColorStyle}>
                <div>
                  <BlockContentRenderer blockContent={blockContent && blockContent} />
                </div>
                <div className="md:hidden flex justify-center pt-4">
                  {buttons && buttons.map(btn => <ButtonRenderer key={`${layout}-${btn.callToAction}`} {...btn} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case 'slash-right':
      const { backgroundColor } = bgColorStyle;
      return (
        <div key={`${props._key}-slash-right`} className="relative" style={bgColorStyle}>
          <div className="mx-auto max-w-7xl">
            <div className="relative z-10 md:w-full md:max-w-2xl">
              <svg
                className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-bg md:block"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
                style={{ fill: backgroundColor }}>
                <polygon points="0,0 90,0 50,100 0,100" />
              </svg>
              <div className="relative px-6 py-32 md:py-40 lg:py-56">
                <div className="text-center" style={textColorStyle}>
                  <BlockContentRenderer blockContent={blockContent && blockContent} />
                  <div className="mt-10 flex justify-center">
                    {buttons && buttons.map(btn => <ButtonRenderer key={`${layout}-${btn.callToAction}`} {...btn} />)}
                  </div>
                </div>
              </div>
            </div>
            <div className="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
              {image && (
                <Image
                  {...image}
                  className="hidden aspect-[6/2]  object-cover md:block md:h-full"
                  alt=""
                  opacity={opacity}
                />
              )}
            </div>
          </div>
        </div>
      );

    default:
      return <></>;
  }
};

export default HeroSection;
