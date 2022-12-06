import { FunctionComponent } from "react";
import { enGb } from "src/core";
import { Tag, Title } from "src/ui-kit";

const MyTags: FunctionComponent = () => {
  return (
    <div>
      <Title>{enGb.MY_TAGS}</Title>
      <div className="flex max-w-[calc(360px_-36px_-_68pxs)] flex-row flex-wrap gap-10px gap-y-5">
        <Tag name={enGb.TWITTER} />
        <Tag name={enGb.SOCIAL_MEDIA} />
        <Tag name={enGb.TOP_TEN} />
        <Tag name={enGb.FINANCES} />
      </div>
    </div>
  );
};

export default MyTags;
