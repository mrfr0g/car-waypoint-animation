Exploring a UI design where an object is moving towards a waypoint.

The example supports two modes: Create, Play. In Create mode the user is able to set and remove waypoints on the map. In Play mode the system will "fetch" the next waypoint every 5 seconds. The object is animated using framer-motion to create a path between the current and next waypoint. This presents a consistent, unbroken movement of the object to the the user while reducing the number of calls needed to make to the "api".

A downside to this animation approach is the potential for stuttering when the system can't produce the next waypoint. In effect, the object will finish its animation to the current waypoint target, then halt until the next one is resolved. This can occur if the animation speed is faster than the fetch of the next waypoint.

One way to alleviate this issue is to implement a simplified path prediction by drawing a path between the previous waypoint and current waypoint which continues along the same direction. The next waypoint should be a short distance from the last target waypoint to avoid creating a large gap to the next actual waypoint. This implementation uses initial buffering in an attemp to have enough data in memory to avoid it.
