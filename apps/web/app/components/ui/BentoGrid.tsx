import { cn } from "../../lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  imageURL,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  imageURL?: string;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-300 bg-white p-4 transition duration-200 hover:shadow-xl hover:-translate-x-0.5 hover:-translate-y-0.5 relative overflow-clip',
        className,
      )}
    >
      <div className="transition duration-200 group-hover/bento:-translate-x-0.5 group-hover/bento:-translate-y-0.5 z-50">
        {icon}
        <div className="mt-2 mb-2 sm:mb-0.5 font-sans sm:text-2xl font-bold text-neutral-600">
          {title}
        </div>
        <div className="font-sans text-xs sm:text-sm font-normal text-neutral-600">
          {description}
        </div>
      </div>
      <div className="absolute bg-linear-to-br from-pink-50 to-black/0  h-full inset-0 z-10"></div>
      {imageURL && (
        <div
          className="absolute h-full inset-0 z-0"
          style={{
            backgroundImage: `url(${imageURL})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
    </div>
  );
};
