import React, {useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import COLORS from "../constants/Colors";
import FONTS from "../constants/Fonts";
import IMAGES from "../constants/Images";
import { AntDesign, Ionicons } from "@expo/vector-icons";


const MovieCard = () => {
const [liked, setLiked] = useState(false)



  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.imdbContainer}>
          <Image
            source={IMAGES.IMDB}
            resizeMode="cover"
            style={styles.imdbImage}
          />
          <Text style={styles.imdbRating}>9.4</Text>
        </View>
        <TouchableOpacity onPress={() => setLiked(!liked)}>
          <Ionicons
            name={liked ? "heart" : "heart-outline"}
            size={25}
            color={liked ? COLORS.HEART : COLORS.WHITE}
            style={{ position: "absolute", top: 275, left: 10 }}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.movieTitle} numberOfLines={3}>
          URI - Surgical Strike
        </Text>

        <View style={styles.movieSubTitleContainer}>
          <Text style={styles.movieSubTitle}>Hindi | (U/A)</Text>
          <View style={styles.rowAndCenter}>
            <AntDesign
              name="heart"
              size={20}
              color={COLORS.HEART}
              style={{ marginRight: 5 }}
            />
            <Text style={styles.movieSubTitle}>90%</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.ACTIVE,
    height: 340,
    width: 230,
    marginVertical: 2,
    borderRadius: 12,
  },
  movieTitle: {
    fontFamily: FONTS.EXTRA_BOLD,
    color: COLORS.GRAY,
    paddingVertical: 2,
    marginTop: 5,
    width: 230,
  },
  movieSubTitle: {
    fontSize: 12,
    fontFamily: FONTS.REGULAR,
  },
  movieSubTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowAndCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  imdbContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    backgroundColor: COLORS.YELLOW,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 12,
    paddingVertical: 3,
  },
  imdbImage: {
    height: 25,
    width: 50,
    borderBottomLeftRadius: 5,
  },
    imdbRating: {
        marginRight: 5,
        color: COLORS.HEART,
        fontFamily: FONTS.EXTRA_BOLD,
        fontSize: 12,
  
  },
});

export default MovieCard;
