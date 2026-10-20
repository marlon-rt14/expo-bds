import {Carousel} from "@bds/react-native";
import {ComponentPlayground} from "../../../../components";
import {Text, View} from "react-native";
import React, {ReactNode} from "react";

export function CarouselScreen() {
  return (
    <ComponentPlayground name="Carousel">
      <View style={{width: "100%", borderWidth: 1, borderColor: "red"}}>
        <Carousel itemWidth={300} layout="paged">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <Item key={index} text={`Item ${index}`} />
            ))}
        </Carousel>
      </View>
      {/* <View style={{width: "100%", borderWidth: 1, borderColor: "red"}}> */}
      {/*   <Carousel itemWidth={300} itemLabel="hola"> */}
      {/*     {Array(5) */}
      {/*       .fill(0) */}
      {/*       .map((_, index) => ( */}
      {/*         <Item key={index} text={`Item ${index}`} /> */}
      {/*       ))} */}
      {/*   </Carousel> */}
      {/* </View> */}
    </ComponentPlayground>
  );
}

const Item = ({text}: {text: string}): ReactNode => (
  <View
    style={{
      // flex: 1,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      height: 150,
    }}
  >
    <Text>{text}</Text>
  </View>
);
