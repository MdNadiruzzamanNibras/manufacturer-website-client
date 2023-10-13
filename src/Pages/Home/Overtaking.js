import React from 'react';
import overtake from '../../images/overTake/safety-motorcycle-driving-rules-tips-turn-your-signal-lights-turning-back-view-bike-rider-junction-crossroad-243568164.jpg'
const Overtaking = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={overtake} className="lg:max-w-sm mt-16 rounded-lg shadow-2xl " />
    <div>
      <h1 className="text-5xl mb-4 font-bold">Rules for overtaking:</h1>
      <p className="py-1">  1. You have to control the speed of your motorcycle.</p>
      <p className="py-1">  2. Signal should be given to the motorcycle in front and behind the line on which the motorcycle is running.</p>
      <p className="py-1">  3. Always make sure that the motorcycle does not go too far from the middle of the road when overtaking.</p>
      <p className="py-1">  4. When overtaking, you have to keep an eye on the vehicle coming from the opposite direction.
</p>
      <p className="py-1">  5. Increase the speed of the motorcycle as much as possible to end overtaking.
</p>
      <p className="py-1">  6. It is never right to overtake in a dangerous way.
</p>
      <p className="py-1">  7. When overtaking yourself, you have to make sure that other vehicles are also overtaking.
</p>
      <p className="py-1">  8. Avoid frequent overtaking on many vehicles or crowded roads.
</p>
      <p className="py-1">  9. It is better not to overtake on winding or two-way roads.
</p>
      <p className="py-1">  10. If there is a big car or lorry in front, you should not overtake without looking at how much space is left.
</p>
     
    </div>
  </div>
</div>
    );
};

export default Overtaking;