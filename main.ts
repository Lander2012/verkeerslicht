basic.forever(function () {
    Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Go)
    basic.pause(2000)
    Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.ReadyToStop)
    basic.pause(2000)
    Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
    basic.pause(2000)
    Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.GetReady)
    basic.pause(2000)
})
basic.forever(function () {
	
})
