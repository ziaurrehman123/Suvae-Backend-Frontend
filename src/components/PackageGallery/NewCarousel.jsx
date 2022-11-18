import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer
} from "react-stacked-center-carousel";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import "./Slide.css";
import { Slide } from "./Slide";

const data = [
  {
    image: "/images/slideItem.png",
    text: "one"
  },
  {
    image: "/images/slideItem.png",
    text: "two"
  },
  {
    image: "/images/slideItem.png",
    text: "three"
  },
  {
    image: "/images/slideItem.png",
    text: "four"
  },
  {
    image: "/images/slideItem.png",
    text: "five"
  },
  {
    image: "/images/slideItem.png",
    text: "six"
  },
  {
    image: "/images/slideItem.png",
    text: "seven"
  },
  {
    image: "/images/slideItem.png",
    text: "eight"
  }
];

function Pagination(props) {
  const { centerSlideDataIndex, updatePosition } = props;
  console.log("🚀 ~ centerSlideDataIndex--000", centerSlideDataIndex);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: 20
      }}
    >
      {data.map((_, index) => {
        const isCenterSlide = props.centerSlideDataIndex === index;
        return (
          <div
            onClick={() => {
              updatePosition(index);
            }}
            style={{
              height: 15,
              width: 15,
              borderRadius: "100%",
              background: isCenterSlide ? "black" : "none",
              border: "1px solid black",
              cursor: "pointer"
            }}
          />
        );
      })}
    </div>
  );
}

const CardExample = () => {
  const ref = React.useRef(StackedCarousel);
  const [centerSlideDataIndex, setCenterSlideDataIndex] = React.useState(0);
  const onCenterSlideDataIndexChange = (newIndex) => {
    setCenterSlideDataIndex(newIndex);
  };

  const updatePosition = (index) => {
    console.log("🚀 ~ ition ~ index", index);
    console.log("🚀 ~centerSlideDataIndex--111", centerSlideDataIndex);
    console.log("🚀 subtract", index - centerSlideDataIndex);
    ref?.current?.swipeTo(index - centerSlideDataIndex);
  };

  return (
    <div className="card">
      <div style={{ width: "100%", position: "relative" }}>
        <ResponsiveContainer
          carouselRef={ref}
          render={(width, carouselRef) => {
            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={Slide}
                slideWidth={450}
                carouselWidth={width}
                data={data}
                maxVisibleSlide={5}
                disableSwipe
                customScales={[1, 0.85, 0.7, 0.55]}
                transitionTime={450}
                onActiveSlideChange={onCenterSlideDataIndexChange}
              />
            );
          }}
        />
        <Fab
          className="card-button left"
          size="small"
          onClick={() => ref.current?.goBack()}
        >
          <KeyboardArrowLeftIcon style={{ fontSize: 30 }} />
        </Fab>
        <Fab
          className="card-button right"
          size="small"
          onClick={() => ref.current?.goNext()}
        >
          <KeyboardArrowRightIcon style={{ fontSize: 30 }} />
        </Fab>
      </div>
      <Pagination
        updatePosition={updatePosition}
        centerSlideDataIndex={centerSlideDataIndex}
      />
    </div>
  );
};

export default CardExample;
