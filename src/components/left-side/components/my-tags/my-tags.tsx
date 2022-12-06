import { FunctionComponent, useEffect, useState } from "react";
import { getTags } from "./api";
import { ITag } from "./api-models";
import { Tag } from "src/ui-kit";

const MyTags: FunctionComponent = () => {
  const [tags, setTags] = useState<ITag[]>([{ id: "1", name: "adsad" }]);

  useEffect(() => {
    getTags()
      .then((response) => {
        console.log(response);
        setTags(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <h1 className="mb-5 w-[calc(100%_-_36px_-_68px)] text-base font-semibold">
        My Tags
      </h1>
      <div>
        {tags.map((item) => (
          <Tag key={item.id} name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default MyTags;
