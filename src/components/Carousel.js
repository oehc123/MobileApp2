import React, { Component } from 'react';

import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export class Carousel extends Component {

  constructor(props) {
    super(props);
    
    this.renderView = props.renderView;
    this.showPageViews = props.showPageViews == null ? true : props.showPageViews;
    this.pagingEnabled = props.pagingEnabled == null ? true : props.pagingEnabled;
    this.widthView = props.widthView;

    this.state = { 
      currentPage: 0,
      countPages: Math.round((props.widthView / width) * props.array.length),
      items: props.array
    };
  }

  componentView = () => {
    return (  
      <View
        style={styles.scrollContainer}
      >
        <ScrollView
          ref={(ref) => this.scrollView = ref } 
          horizontal
          pagingEnabled={this.pagingEnabled}
          scrollEventThrottle={16}
          onMomentumScrollEnd={ this.onMomentumScrollEndDo }
          showsHorizontalScrollIndicator={false}
        >
          { this.state.items.map((item, index) => this.buildContentPage(item, index) )}
        </ScrollView>
        { this.showPageViews && this.buildPageViews()}
      </View>
    );
  }

  buildContentPage = (item, index) => {
    const { renderView } = this.props;
    content = renderView(item, index);
    return <View key={index} style={{width: this.widthView}}>
      { content }
    </View>;
  }

  buildPageViews = () => {
    var pageViews = [];

    for(let i = 0; i < this.state.countPages; i++){
      pageViews.push((
        <View key={i} style={ this.state.currentPage == i ? styles.activePageView : styles.pageView }></View>
      ))
    }
    
    return (
      <View style={styles.pageViewsContainer}>
          { pageViews }
      </View>
    );
  }

  onMomentumScrollEndDo = (event) => {
    var positionX = event.nativeEvent.contentOffset.x;
    this.setState({ currentPage: Math.round(positionX/width) })
  }

  render() {
    if (this.state) {
      if (!this.widthView || this.widthView == 0)
        console.log('Please provide child width view');  
      else if (!(this.state.items && this.state.items.length))
        console.log('Please provide data array.');
      else
        return this.componentView();  
    }
    return null;    
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    marginTop: 3,
    marginBottom: 3,
  },
  pageViewsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    width: width,
    bottom: 6,
  },
  activePageView: {
    backgroundColor: '#FFFFFF',
    opacity: 1,
    height: 10,
    width: 10,
    borderRadius: 5,
    marginTop: 3,
    marginLeft: 0,
    marginBottom: 0,
    marginRight: 3,
  },
  pageView: {
    backgroundColor: '#FFFFFF',
    opacity: 0.6,
    height: 10,
    width: 10,
    borderRadius: 5,
    marginTop: 3,
    marginLeft: 0,
    marginBottom: 0,
    marginRight: 3,
  },
});