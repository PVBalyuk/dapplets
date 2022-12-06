import { FunctionComponent } from "react";
import { Tag, Title, Color } from "src/ui-kit";
import { enGb } from "src/core";

const CommunityTags: FunctionComponent = () => {
  return (
    <div>
      <Title>{enGb.COMMUNITY_TAGS}</Title>
      <div className="flex max-w-[calc(360px_-_36px_-_68px)] flex-row flex-wrap gap-10px gap-y-20px">
        <Tag name={enGb.TWITTER} color={Color.green} />
        <Tag name={enGb.SOCIAL_MEDIA} color={Color.green} />
        <Tag name={enGb.TOP_TEN} color={Color.green} />
        <Tag name={enGb.FINANCES} color={Color.green} />
      </div>
    </div>
  );
};

export default CommunityTags;
