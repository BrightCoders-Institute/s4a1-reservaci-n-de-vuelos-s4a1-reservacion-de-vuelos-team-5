import React, { useState } from 'react';
import WheelPicker from 'react-native-wheely';

export default function Numbers() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <WheelPicker
      selectedIndex={selectedIndex}
      options={['1', '2', '3','4','5','6','7','8','9']}
      onChange={(index) => setSelectedIndex(index)}
      itemHeight={90}
      // itemStyle={}
      itemTextStyle={{fontSize:30, color: 'black'}}
      // containerStyle
      // selectedIndicatorStyle={{borderBottomWidth:2, borderTopWidth:2}}
      />
  );
}