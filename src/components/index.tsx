import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
// @ts-ignore
import * as d3 from "d3";
// import { AxisLeft } from '../../components/AxisLeft';
// import { AxisBottom } from '../../components/AxisBottom';
import img from "./123.jpg";
// import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
// import './BCDPlus.scss';

const MARGIN = { top: 60, right: 60, bottom: 60, left: 60 };

type ScatterplotProps = {
  width: number;
  height: number;
  zoomState?: IZoomState;
  setZoomState?: Dispatch<SetStateAction<IZoomState>>;
};

export interface IZoomState {
  k: number;
  x: number;
  y: number;
}

// export const Scatterplot = ({ width, height, zoomState, setZoomState }: ScatterplotProps) => {
//   const svgRef = useRef<SVGSVGElement | null>(null);
//   const [currentZoomState, setCurrentZoomState] = useState();
//   console.log('zoomState', zoomState);
//
//   console.log('currentZoomState', currentZoomState);
//   const boundsWidth = width - MARGIN.right - MARGIN.left;
//   const boundsHeight = height - MARGIN.top - MARGIN.bottom;
//
//   // Scales
//   const yScale = d3.scaleLinear().domain([0, 10]).range([0, boundsHeight]);
//   const xScale = d3.scaleLinear().domain([0, 10]).range([0, boundsWidth]);
//
//   useEffect(() => {
//     const svg = d3.select(svgRef.current);
//
//
//
//     // const svgImage = svg.selectAll('.image').data([0]);
//     // svgImage.enter()
//     //   .append("pattern")
//     //   .attr('id', 'img')
//     //   .attr('x', '0')
//     //   .attr('y', '0')
//     //   .attr('width', '1')
//     //   .attr('height', '1')
//     //   .append('image')
//     //   .attr('xLink:href', `${img}`)
//     //   .attr('x', '0')
//     //   .attr('y', '0')
//     //   .attr('width', '580')
//     //   .attr('height', '280')
//     //
//     // const view = svg.selectAll('.rect').data([0]);
//     // view.enter()
//     //   .append('rect')
//     //   .attr("class", "view")
//     //   .style('fill', 'url(#img)')
//     //   .attr('x', '60')
//     //   .attr('y', '60')
//     //   .attr('width', '580')
//     //   .attr('height', '280')
//     //   .attr('transform', `translate(${zoomState.x}, ${zoomState.y}) scale(${zoomState.k})`)
//
//
//     // svg.append('svg:image')
//     //   .attr('xLink:href', `${img}`)
//     //   .attr('x', '0')
//     //   .attr('y', '0')
//     //   .attr('width', '128')
//     //   .attr('height', '128')
//       // .attr({
//       //   'xLink:href': `${img}`,
//       //   x: 0,
//       //   y: 0,
//       //   width: 128,
//       //   height: 128,
//       // })
//
//     if (Object.getPrototypeOf(zoomState).hasOwnProperty('rescaleX')) {
//       // @ts-ignore
//       const newXScale = zoomState.rescaleX(xScale);
//       // @ts-ignore
//       const newYScale = zoomState.rescaleY(xScale);
//       xScale.domain(newXScale.domain());
//       yScale.domain(newYScale.domain());
//     }
//
//       // axes
//       const xAxis = d3.axisBottom(xScale);
//       svg
//           .select(".x-axis")
//           .attr("transform", `translate(0, ${280})`)
//           .call(xAxis);
//
//       const yAxis = d3.axisLeft(yScale);
//       svg.select(".y-axis").call(yAxis);
//
//     const zoomBehavior = d3.zoom()
//         .scaleExtent([1, 40])
//         .translateExtent([
//           [0, 0],
//           [width, height],
//         ])
//         .on("zoom", (event: { transform: IZoomState }) => {
//           const scalesZoomState: IZoomState = event.transform;
//           console.log('zoomState', scalesZoomState);
//           // @ts-ignore
//           setCurrentZoomState(scalesZoomState);
//           if (setZoomState) {
//             setZoomState(scalesZoomState)
//           }
//         });
//     svg.call(zoomBehavior);
//   }, [currentZoomState, zoomState]);
//
//   return (
//     <svg ref={svgRef} width={width} height={height}>
//       {/* first group is for the violin and box shapes */}
//       <g
//         width={boundsWidth}
//         height={boundsHeight}
//         transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
//       >
//         {/* Y axis */}
//         {/*<AxisLeft yScale={yScale} pixelsPerTick={40} width={boundsWidth} />*/}
//
//         {/* X axis, use an additional translation to appear at the bottom */}
//         {/*<g transform={`translate(0, ${boundsHeight})`}>*/}
//         {/*  <AxisBottom*/}
//         {/*    xScale={xScale}*/}
//         {/*    pixelsPerTick={40}*/}
//         {/*    height={boundsHeight}*/}
//         {/*  />*/}
//         {/*</g>*/}
//         <g className="x-axis" />
//         <g className="y-axis" />
//         {/*<g width={580} height={280} style={{ transformOrigin: '0% 0%', transform: `translate3d(${zoomState.x}px, ${zoomState.y}px, 0)`, scale: `${zoomState.k}`, overflow: 'hidden' }}>*/}
//         {/*  <image href={img} width='100%' height='100%'  />*/}
//         {/*</g>*/}
//       </g>
//       {/*<rect x={60} y={60} width={580} height={280} transform={`translate(${zoomState.x}, ${zoomState.y})`} style={{ backgroundImage: `url(${img})`, fill: 'transparent' }} />*/}
//     </svg>
//   );
// };

export const Axes = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [coordinates, setCoordinates] = useState({ k: 1, x: 0, y: 0 });
  const width = 1152;
  const height = 500;

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const view = d3.select(".view");
    const image = document.getElementById("image");
    // view.append('svg:image').attr('x', '0').attr('y', '0').attr('width', '100').attr('height', '100').attr('xlink:href', `${img}`)
    const x = d3.scaleLinear().domain([0, width]).range([0, width]);

    const y = d3.scaleLinear().domain([0, height]).range([0, height]);

    const xAxis = d3
      .axisBottom(x)
      .ticks(((width + 2) / (height + 2)) * 10)
      .tickSize(height)
      .tickPadding(10);

    const yAxis = d3
      .axisRight(y)
      .ticks(10)
      .tickSize(width)
      .tickPadding(8 - width);

    const gX = d3.select(".axis--x").call(xAxis);
    const gY = d3.select(".axis--y").call(yAxis);

    const zoom = d3
      .zoom()
      .scaleExtent([1, 40])
      .translateExtent([
        [-100, -100],
        [width + 90, height + 100],
      ])
      // .filter(filter)
      .on("zoom", (event: { transform: any; sourceEvent: any }) => {
        const scalesZoomState: any = event.transform;
        const delta: any = event.sourceEvent;
        console.log(scalesZoomState);
        console.log(scalesZoomState.invertX(scalesZoomState.x));

        setCoordinates((prevState) => {
          return {
            ...prevState,
            x: scalesZoomState.x,
            y: scalesZoomState.y,
            k: scalesZoomState.k,
          };
        });

        if (image) {
          image.style.transform = `translate(${scalesZoomState.x}px, ${scalesZoomState.y}px)`;
          image.style.scale = `${scalesZoomState.k}`;
        }
        // console.log(scalesZoomState);
        view.attr("transform", scalesZoomState);
        gX.call(xAxis.scale(scalesZoomState.rescaleX(x)));
        gY.call(yAxis.scale(scalesZoomState.rescaleY(y)));
        // @ts-ignore
      });
    svg.call(zoom);
  }, []);

  const imageStyles = {
    overflow: "hidden",
  };

  return (
    <svg
      ref={svgRef}
      width={width + 20}
      height={height + 20}
      style={{ overflow: "hidden" }}
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0.0%" stopColor="#2c7bb6"></stop>
          <stop offset="12.5%" stopColor="#00a6ca"></stop>
          <stop offset="25.0%" stopColor="#00ccbc"></stop>
          <stop offset="37.5%" stopColor="#90eb9d"></stop>
          <stop offset="50.0%" stopColor="#ffff8c"></stop>
          <stop offset="62.5%" stopColor="#f9d057"></stop>
          <stop offset="75.0%" stopColor="#f29e2e"></stop>
          <stop offset="87.5%" stopColor="#e76818"></stop>
          <stop offset="100.0%" stopColor="#d7191c"></stop>
        </linearGradient>
        {/*<image id="img" href={img} width='100%' height='100%' />*/}
      </defs>
      {/*<rect className="view" style={{ fill: `url(#gradient)`, stroke: '#000' }} x="0" y="0" width={width - 1} height={height - 1}></rect>*/}
      <g className="content"></g>
      <g width={width} height={height} transform={"translate: (60, 60)"}>
        <g className="axis axis--x" />
        <g className="axis axis--y" />
        {/* <image
          // cx={coordinates.x}
          // cy={coordinates.y}

          id="image"
          x={0}
          y={0}
          width="calc(100% - 20px)"
          height="calc(100% - 20px)"
          // x={coordinates.x}
          // y={coordinates.y}
          href={img}
          style={
            {
              // objectFit: "fill",
            }
          }
          preserveAspectRatio="none"
        /> */}
      </g>

      {/*<image id="img" x={10} y={10} href="/image.png" height={height - 10} width={width - 10} preserveAspectRatio="none" />*/}

      {/*<img src={img} onalt="#" style={imageStyles}/>*/}
    </svg>
  );
};

// export const BCDPlus = () => {
//   const [zoomState, setZoomState] = useState<IZoomState>({ k: 1, x: 0, y: 0 });
//   const [d, setD] = useState<string[] | null>(null);
//
//
//   // @ts-ignore
//     // useEffect(async () => {
//     //   const res = await getSampleImage(200, 250)
//     //   console.log(res);
//     //   setD(res?.data?.map((item: any) => item?.base64Slice));
//     // }, [])
//
//   return (
//     <div>
//       {d && d?.map((item: any) => (
//             <div style={{ position: 'relative', backgroundColor: 'white' }}>
//               <Scatterplot height={400} width={700} zoomState={zoomState} setZoomState={setZoomState} />
//               <div style={{ position: 'absolute', width: '580px', height: '280px', top: '60px', left: '60px' }}>
//                 <TransformWrapper
//                   initialScale={zoomState.k}
//                   initialPositionX={zoomState.x}
//                   initialPositionY={zoomState.y}
//                   minScale={1}
//                   maxScale={10}
//                   centerZoomedOut
//                   centerOnInit
//                   onZoom={({ state }) => {
//                     // @ts-ignore
//                     setZoomState(prevState => {
//                       const prototype = Object.getPrototypeOf(prevState);
//                       if(prototype.hasOwnProperty('scale')) {
//                         return Object.create(prototype, {
//                           k: {
//                             value: state.scale,
//                           },
//                           x: {
//                             value: state.positionX,
//                           },
//                           y: {
//                             value: state.positionY,
//                           }
//                         })
//                       }
//                       return {
//                         k: state.scale,
//                         x: state.positionX,
//                         y: state.positionY,
//                       }
//                     })
//                     console.log('imgZoomState', state);
//                   }}
//                   panning={{
//                     disabled: true,
//                   }
//                   }
//                 >
//                   {/*{Array.isArray(d) && d?.map((item: any) => (*/}
//                   {/*  <TransformComponent wrapperStyle={{ width: '100%', height: '100%' }}>*/}
//                   {/*    <img src={`data:image/gif;base64,${item}`} alt="" width="100%" height="100%" />*/}
//                   {/*  </TransformComponent>*/}
//                   {/*))}*/}
//                   <TransformComponent wrapperStyle={{ width: '100%', height: '100%' }}>
//                     <img src={`data:image/gif;base64,${item}`} alt="" width="100%" height="100%" />
//                   </TransformComponent>
//                 </TransformWrapper>
//               </div>
//               {/*<Axes />*/}
//             </div>
//       ))}
//       <div style={{ backgroundColor: 'white', padding: '20px' }}>
//         <Axes />
//       </div>
//
//     </div>
//   //   {d && d?.map((item: any) => (
//   //       <div style={{ position: 'relative', backgroundColor: 'white' }}>
//   //         <Scatterplot height={400} width={700} zoomState={zoomState} setZoomState={setZoomState} />
//   //         <div style={{ position: 'absolute', width: '580px', height: '280px', top: '60px', left: '60px' }}>
//   //           <TransformWrapper
//   //             initialScale={zoomState.k}
//   //             initialPositionX={zoomState.x}
//   //             initialPositionY={zoomState.y}
//   //             minScale={1}
//   //             maxScale={10}
//   //             centerZoomedOut
//   //             centerOnInit
//   //             onZoom={({ state }) => {
//   //               // @ts-ignore
//   //               setZoomState(prevState => {
//   //                 const prototype = Object.getPrototypeOf(prevState);
//   //                 if(prototype.hasOwnProperty('scale')) {
//   //                   return Object.create(prototype, {
//   //                     k: {
//   //                       value: state.scale,
//   //                     },
//   //                     x: {
//   //                       value: state.positionX,
//   //                     },
//   //                     y: {
//   //                       value: state.positionY,
//   //                     }
//   //                   })
//   //                 }
//   //                 return {
//   //                   k: state.scale,
//   //                   x: state.positionX,
//   //                   y: state.positionY,
//   //                 }
//   //               })
//   //               console.log('imgZoomState', state);
//   //             }}
//   //             panning={{
//   //               disabled: true,
//   //             }
//   //             }
//   //           >
//   //             {/*{Array.isArray(d) && d?.map((item: any) => (*/}
//   //             {/*  <TransformComponent wrapperStyle={{ width: '100%', height: '100%' }}>*/}
//   //             {/*    <img src={`data:image/gif;base64,${item}`} alt="" width="100%" height="100%" />*/}
//   //             {/*  </TransformComponent>*/}
//   //             {/*))}*/}
//   //             <TransformComponent wrapperStyle={{ width: '100%', height: '100%' }}>
//   //               <img src={`data:image/gif;base64,${item}`} alt="" width="100%" height="100%" />
//   //             </TransformComponent>
//   //           </TransformWrapper>
//   //         </div>
//   //         {/*<Axes />*/}
//   //       </div>
//   // ))}
//   // { d && d?.map((item: any) => (
//   //
//   // ))
//   // }
//     // <div style={{ position: 'relative', backgroundColor: 'white' }}>
//     //   <Scatterplot height={400} width={700} zoomState={zoomState} setZoomState={setZoomState} />
//     //   <div style={{ position: 'absolute', width: '580px', height: '280px', top: '60px', left: '60px' }}>
//     //     <TransformWrapper
//     //       initialScale={zoomState.k}
//     //       initialPositionX={zoomState.x}
//     //       initialPositionY={zoomState.y}
//     //       minScale={1}
//     //       maxScale={10}
//     //       centerZoomedOut
//     //       centerOnInit
//     //       onZoom={({ state }) => {
//     //           // @ts-ignore
//     //         setZoomState(prevState => {
//     //           const prototype = Object.getPrototypeOf(prevState);
//     //             if(prototype.hasOwnProperty('scale')) {
//     //               return Object.create(prototype, {
//     //                 k: {
//     //                   value: state.scale,
//     //                 },
//     //                 x: {
//     //                   value: state.positionX,
//     //                 },
//     //                 y: {
//     //                   value: state.positionY,
//     //                 }
//     //               })
//     //             }
//     //             return {
//     //               k: state.scale,
//     //               x: state.positionX,
//     //               y: state.positionY,
//     //             }
//     //           })
//     //         console.log('imgZoomState', state);
//     //       }}
//     //       panning={{
//     //         disabled: true,
//     //       }
//     //       }
//     //     >
//     //       {/*{Array.isArray(d) && d?.map((item: any) => (*/}
//     //       {/*  <TransformComponent wrapperStyle={{ width: '100%', height: '100%' }}>*/}
//     //       {/*    <img src={`data:image/gif;base64,${item}`} alt="" width="100%" height="100%" />*/}
//     //       {/*  </TransformComponent>*/}
//     //       {/*))}*/}
//     //       <TransformComponent wrapperStyle={{ width: '100%', height: '100%' }}>
//     //         <img src={`data:image/gif;base64,${d[0]}`} alt="" width="100%" height="100%" />
//     //       </TransformComponent>
//     //     </TransformWrapper>
//     //   </div>
//     //   {/*<Axes />*/}
//     // </div>
//   );
// };
