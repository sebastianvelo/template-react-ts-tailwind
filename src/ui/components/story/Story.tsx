import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import Action, { ActionProps } from "ui/components/action/Action";
import Image from "ui/atomic/image/Image";
import Text from "ui/atomic/text/Text";
import Title from "ui/atomic/title/Title";
import { bgColorHoverableStyle } from "ui/common/style/CommonStyles";
import { FunctionComponent } from "react";
import Row from "../../layout/row/Row";

const styleStyle = (props: StoryProps) =>
  TailwindStyle.builder()
    .add(`justify-between items-center p-2 w-full`)
    .addIf(bgColorHoverableStyle({}), props.hoverable)
    .get();

export interface StoryProps extends ActionProps {
  img?: {
    alt: string;
    src: string;
  };
  title?: string;
  subtitle?: string;
  text?: string;
  hoverable?: boolean;
}

const Story: FunctionComponent<StoryProps> = (props: StoryProps) => (
  <Action {...props}>
    <Row className={styleStyle(props)}>
      <Row className={`justify-between items-center space-x-4`}>
        <Image {...props.img} radius="full" className={`h-16 w-16`} />
        <div>
          <Title content={props.title} size={`xl`}></Title>
          <Text content={props.subtitle} size={`l`}></Text>
        </div>
      </Row>
      <Text content={props.text}></Text>
    </Row>
  </Action>
);

export default Story;