import React, { useState, useCallback, useRef, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, useWindowDimensions, ScrollView, Text } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Slider from "@react-native-community/slider";

export default function UtubeVideo() {
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [isSliding, setIsSliding] = useState(false);
  const playerRef = useRef(null);
  const backgroundColor = "#0d1116";


  const { width } = useWindowDimensions();
  const playerHeight = width * (9 / 15);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      setShowPlayButton(true);
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
    setShowPlayButton((prev) => !prev);
  }, []);

  const onSliderValueChange = useCallback(
    (value) => {
      playerRef.current.seekTo(value);
      setCurrentTime(value);
    },
    [playerRef]
  );

  const handleVideoPress = () => {
    setShowPlayButton(true);
  };

  const handleSlidingStart = () => {
    setIsSliding(true);
  };

  const handleSlidingComplete = (value) => {
    setIsSliding(false);
    playerRef.current.seekTo(value);
    setCurrentTime(value);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (playing && !isSliding) {
        playerRef.current?.getCurrentTime().then((time) => setCurrentTime(time));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [playing, isSliding]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <YoutubePlayer
        ref={playerRef}
        height={playerHeight}
        width={width}
        play={playing}
        videoId={"S8u8P6R1t-Q"}
        onChangeState={onStateChange}
        onReady={() => playerRef.current.getDuration().then(setDuration)}
        onProgress={({ currentTime }) => {
          if (!isSliding) {
            setCurrentTime(currentTime);
          }
        }}
        playerParams={{
          controls: 1,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          vq: "hd720",
        }}
      />

      <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={handleVideoPress} />
      {showPlayButton && (
        <TouchableOpacity style={styles.playButton} onPress={togglePlaying}>
          <AntDesign
            name={playing ? "pause" : "caretright"}
            style={{ fontSize: 25, color: "#fff" }}
          />
        </TouchableOpacity>
      )}

      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={duration}
          value={currentTime}
          onValueChange={onSliderValueChange}
          onSlidingStart={handleSlidingStart}
          onSlidingComplete={handleSlidingComplete}
          minimumTrackTintColor="red"
          maximumTrackTintColor="#858585"
          thumbTintColor="red"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0d1116",
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "transparent",
  },
  playButton: {
    position: "absolute",
    top: "46%",
    left: "58%",
    transform: [{ translateX: -50 }, { translateY: -25 }],
    backgroundColor: "red",
    padding: 10,
    borderRadius: 55,
  },
  sliderContainer: {
    marginTop: 10,
    alignItems: "center",
    width: "100%",
  },
  slider: {
    width: "90%",
    height: 40,
  },
});