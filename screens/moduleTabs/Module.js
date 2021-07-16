import React , {useState, useEffect, Component} from 'react';
import { StyleSheet, Text, SafeAreaView, View, Dimensions, FlatList} from 'react-native';
import { VictoryLabel, VictoryPolarAxis, VictoryChart, VictoryTheme, VictoryGroup, VictoryArea} from "victory-native";


  const moduleData = [
    { WorkLoad: 1, Difficulty: 3, Interactivity: 3, Professor: 5, Popularity: 5 }
  ]
  

  const processData = (data) => {
    const maxByGroup = 5;
    const makeDataArray = (d) => {
      return Object.keys(d).map((key) => {
        return { x: key, y: d[key] / maxByGroup };
      });
    };
    return data.map((datum) => makeDataArray(datum));
  }

  const getMaxima = (data) => {
    const groupedData = Object.keys(data[0]).reduce((memo, key) => {
        memo[key] = data.map((d) => d[key]);
        return memo;
      }, {});
      return Object.keys(groupedData).reduce((memo, key) => {
        memo[key] = Math.max(...groupedData[key]);
        return memo;
      }, {});
  }
    


const Module = ({navigation, route}) => {
    const [modData, setModData] = useState(processData(moduleData))
    const [maxima, setMaxima] = useState(getMaxima(moduleData))
    


    return ( 
        <View style={{padding: 20}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
            {route.params.module.moduleCode}
            </Text>
            <Text style={{fontWeight: 'bold',fontSize: 20}}>
            {route.params.module.title}
            </Text>
            
            <View style={{marginTop: 20, backgroundColor: 'transparent', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <VictoryChart polar 
                animate={{ duration: 1000, easing: "elastic", baseText:{color: 'red'}}}
                theme={VictoryTheme.material}
                domain={{y: [0,1]}}
            >
            <VictoryGroup colorScale={["#00A2F5"]}
          style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}
        >
            {modData.map((data, i) => {
            return <VictoryArea key={i} data={data}/>;
          })}

        </VictoryGroup>
        {
        Object.keys(maxima).map((key, i) => {
          return (
            <VictoryPolarAxis key={i} dependentAxis
              style={{
                axisLabel: { fontSize:15, padding: 20, fill: '#467DBE' },
                axis: { stroke: "none" },
                grid: { stroke: "grey", strokeWidth: 0.25, opacity: 0.5 },
                

              }}
              tickLabelComponent={
                <VictoryLabel labelPlacement="horizontal"/>
              }
              labelPlacement="perpendicular"
              axisValue={i + 1} label={key}
              tickFormat={(t) => Math.ceil(t * 5)}
              tickValues={[0.25, 0.5, 0.75]}
            />
          );
        })
      }

<VictoryPolarAxis
          labelPlacement="parallel"
          tickFormat={() => ""}
          style={{
            axis: { stroke: "none" },
            grid: { stroke: "grey", opacity: 0.5 }
          }}
        />
            </VictoryChart>
            </View>
            
            {/* <View style = {styles.listItem}> */}
            <View style={{display:'flex', marginTop: 20, backgroundColor: 'white', width: '100%', borderRadius: 10, padding: 15,alignSelf: "center",
}}>
                <Text style={{color:'black', fontWeight: 'bold',fontSize: 20}}>
                    See who's taken the module
                </Text>
                <Text>
                    
                </Text>
                
            </View>
            
        </View>
     );
}
 





export default Module;