import ArchiveIconFill from "@/icons/ArchiveIconFill";
import PersonCircleFillIcon from "@/icons/PersonCircleFillIcon";
import SolidCurrencyDollarIcon from "@/icons/SolidCurrencyDollarIcon";
import Image from "next/image";

import threeD from "./icons/3d.svg";
import designIcon from "./icons/design.svg";
import drawingIcon from "./icons/drawing.svg";
import softwareIcon from "./icons/software.svg";
import selfImprovementIcon from "./icons/selfImprovement.svg";
import fitnessIcon from "./icons/fitnessHealth.svg";
import musicIcon from "./icons/musicSound.svg";
import photographyIcon from "./icons/photography.svg";
import writingIcon from "./icons/writingPublishing.svg";
import businessIcon from "./icons/businessMoney.svg";
import educationIcon from "./icons/education.svg";
import comicsIcon from "./icons/comic.svg";
import fictionIcon from "./icons/fictionBook.svg";
import audioIcon from "./icons/audio.svg";
import recordedMusicIcon from "./icons/recordedMusic.svg";
import filmsIcon from "./icons/film.svg";
import gamingIcon from "./icons/gaming.svg";
import otherIcon from "./icons/other.svg";
import Link from "next/link";

export default function CategorySection() {
  return (
    <section className="space-y-3">
      <h2 className="text-h2">Products by category</h2>

      <div className="grid gap-4 grid-cols-[repeat(auto-fit,_minmax(min(24rem,_100%),_1fr))]">
        <CategoryCard
          image={threeD}
          title="3D"
          description="Perfect your craft with the same tools used at Dreamworks and Pixar."
          creators={16}
          products={93}
          sales={21}
        />

        <CategoryCard
          title="Design"
          image={designIcon}
          description="Code, design, and ship your dream product with these technical resources."
          creators={24}
          products={98}
          sales={31}
        />

        <CategoryCard
          title="Drawing & Painting"
          image={drawingIcon}
          description="Tutorials, plugins, and brushes from pro concept artists and illustrators."
          creators={19}
          products={115}
          sales={27}
        />

        <CategoryCard
          title="Software Development"
          image={softwareIcon}
          description="Learn to code and tools to help you code more productively."
          creators={10}
          products={36}
          sales={11}
        />

        <CategoryCard
          title="Self Improvement"
          image={selfImprovementIcon}
          description="Move your body and your audience with guides, videos, and more."
          creators={18}
          products={52}
          sales={9}
        />

        <CategoryCard
          title="Fitness & Health"
          image={fitnessIcon}
          description="Whether you're looking to shed or shred, here are coaches to pump you up."
          creators={5}
          products={14}
          sales={1}
        />

        <CategoryCard
          title="Sound & Music Design"
          image={musicIcon}
          description="Tracks, beats, and loops from the best musicians and engineers in the biz."
          creators={11}
          products={80}
          sales={10}
        />

        <CategoryCard
          title="Photography"
          image={photographyIcon}
          description="Get snapping with pro presets, stock imagery, and digi darkroom needs."
          creators={8}
          products={68}
          sales={4}
        />

        <CategoryCard
          title="Writing & Publishing"
          image={writingIcon}
          description="Fill your brain with words and wisdom from creative authors and storytellers."
          creators={19}
          products={75}
          sales={6}
        />

        <CategoryCard
          title="Business & Money"
          image={businessIcon}
          description="Learn to earn in an increasingly unpredictable world."
          creators={18}
          products={39}
          sales={5}
        />

        <CategoryCard
          title="Education"
          image={educationIcon}
          description="Pick up a new skill with courses and guides from world-class pros."
          creators={24}
          products={106}
          sales={16}
        />

        <CategoryCard
          title="Comics & Graphic Novels"
          image={comicsIcon}
          description="Sequential art with loads of heart. Welcome to a paradise of panels"
          creators={6}
          products={35}
          sales={4}
        />

        <CategoryCard
          title="Fiction Books"
          image={fictionIcon}
          description="Short stories, novellas, and epic tomes full of interesting characters and worlds."
          creators={2}
          products={5}
          sales={303}
        />

        <CategoryCard
          title="Audio"
          image={audioIcon}
          description="Open your ears and mind to interviews, meditations, and true crime thrillers."
          creators={2}
          products={13}
          sales={734}
        />

        <CategoryCard
          title="Recorded Music"
          image={recordedMusicIcon}
          description="Tracks and albums from the best musicians and artists in the biz."
          creators={658}
          products={2}
          sales={166}
        />

        <CategoryCard
          title="Films"
          image={filmsIcon}
          description="Have a movie night with some of the best stories to hit the small screen."
          creators={8}
          products={93}
          sales={9}
        />

        <CategoryCard
          title="Gaming"
          image={gamingIcon}
          description="Explore new worlds from the world's most creative indie developers."
          creators={6}
          products={39}
          sales={6}
        />

        <CategoryCard
          title="Other"
          image={otherIcon}
          description=""
          creators={104}
          products={447}
          sales={33}
        />
      </div>
    </section>
  );
}

interface CategoryCardProps {
  title: string;
  description: string;
  creators: number;
  products: number;
  sales: number;
  image: string;
}

function CategoryCard({
  image,
  title,
  description,
  creators,
  products,
  sales,
}: CategoryCardProps) {
  return (
    <Link href="/" className="hover:shadow-1 hover:-translate-x-1 hover:-translate-y-1 transition-transform rounded-1 active:transform-none active:shadow-0">
      <div className="bg-white border border-solid border-black rounded-1 p-5 flex gap-5 items-start h-full w-full">
        <Image
          src={image}
          width={96}
          height={69}
          alt={`${title} illustration`}
        />

        <div className="flex flex-col gap-2">
          <h3 className="text-h2 font-bold">{title}</h3>
          <p>{description}</p>
          <div className="flex flex-wrap gap-3 text-black/50 fill-black/50">
            <span className="inline-flex items-center gap-1">
              <PersonCircleFillIcon className="w-4" /> {creators}K creators
            </span>
            <span className="inline-flex items-center gap-1">
              <ArchiveIconFill className="w-4" /> {products}K products
            </span>
            <span className="inline-flex items-center gap-1">
              <SolidCurrencyDollarIcon className="w-4" />
              {sales}M sales
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
