import Color from "ui/common/types/color/Color";
import Size from "ui/common/types/size/Size";

export const sectionProps = {
  className: `w-full`,
  title: {
    size: "3xl" as Size,
    className: "bg-primary p-2",
    color: "dark" as Color,
    content: "Breadcrumb"
  }
};

export const breadcrumbProps = {
  levels: [
    {
      content: "Level 1"
    },
    {
      content: "Level 2"
    },
    {
      content: "Level 3"
    },
    {
      content: "Level 4"
    }
  ]
};
