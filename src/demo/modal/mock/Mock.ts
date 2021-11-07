import Color from "common/ui/lib/types/color/Color";
import Size from "common/ui/lib/types/size/Size";

export const sectionProps = {
  className: `w-full`,
  title: {
    size: "3xl" as Size,
    className: "bg-dark p-2",
    color: "primary" as Color,
    content: "Modal"
  }
};

export const modalProps = {
  header: `Title`,
  body: {
    title: "Body title",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras velit dolor, eleifend in lorem a, commodo viverra leo. Proin vel tellus quis ipsum condimentum ornare. Nulla in metus quis mi pharetra volutpat. Vestibulum maximus erat dapibus mattis lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras velit dolor, eleifend in lorem a, commodo viverra leo. Proin vel tellus quis ipsum condimentum ornare. Nulla in metus quis mi pharetra volutpat. Vestibulum maximus erat dapibus mattis lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras velit dolor, eleifend in lorem a, commodo viverra leo. Proin vel tellus quis ipsum condimentum ornare. Nulla in metus quis mi pharetra volutpat. Vestibulum maximus erat dapibus mattis lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
  },
  footer: {
    actions: [
      {
        content: `Cancel`,
        url: `#`,
        onClick: () => {},
        color: "danger" as Color
      },
      {
        content: `Accept`,
        url: `#`,
        onClick: () => {},
        color: "success" as Color
      }
    ]
  }
};