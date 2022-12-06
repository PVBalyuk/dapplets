import { FunctionComponent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "src/store";
import { getAllDapplets } from "src/store/reducers";
import { Dapplet } from "./components";
import {
  DragDropContext,
  DropResult,
  Droppable,
  Draggable,
} from "react-beautiful-dnd";

const Dapplets: FunctionComponent = () => {
  const dapplets = useAppSelector((state) => state.dapplets);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(
      getAllDapplets({
        start: 0,
        direction: dapplets.direction,
      })
    );
  }, [dispatch, dapplets.direction]);
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;
    const [newOrder] = dapplets.dapplets.splice(source.index, 1);
    dapplets.dapplets.splice(destination.index, 0, newOrder);
  };
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="dapplet">
          {(provided) => (
            <div
              className="dapplet"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {dapplets.dapplets.map((dapplet, index) => {
                return (
                  <Draggable
                    key={dapplet.id}
                    draggableId={dapplet.id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {dapplet.description}
                      </div>
                    )}
                  </Draggable>
                );
              })}
            </div>
          )}
        </Droppable>
        {/* {dapplets.dapplets.map((dapplet) => (
          <Droppable droppableId="dapplet">
            <Dapplet key={dapplet.id} {...dapplet} />
          </Droppable>
        ))} */}
      </DragDropContext>
    </div>
  );
};

export default Dapplets;
