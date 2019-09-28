import React, { Component } from 'react';

import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export class Carousel extends Component {

  constructor(props) {
    super(props);
    const { array, widthView, renderView, showPageViews, pagingEnabled } = this.props;

    this.renderView = renderView;
    this.showPageViews = showPageViews == null ? true : showPageViews;
    this.pagingEnabled = pagingEnabled == null ? true : pagingEnabled;
    this.widthView = widthView;
    this.state = { 
      currentPage: 0,
      countPages: Math.round((widthView / width) * array.length),
      items: array
    };
    this.style = this.buildStyles()
  }

  componentView = () => {
    return (  
      <View
        style={this.style.scrollContainer}
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
    return <View key={index} style={this.style.pageContentView}>
      { content }
    </View>;
  }

  buildPageViews = () => {
    var pageViews = [];

    for(let i = 0; i < this.state.countPages; i++){
      pageViews.push((
        <View key={i} style={ this.state.currentPage == i ? this.style.activePageView : this.style.pageView }></View>
      ))
    }
    
    return (
      <View style={this.style.pageViewsContainer}>
          { pageViews }
      </View>
    );
  }

  buildStyles(){
    return  StyleSheet.create({
      pageContentView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: this.widthView,
      },
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
        height: 7,
        width: 7,
        borderRadius: 3.5,
        marginTop: 3,
        marginLeft: 0,
        marginBottom: 0,
        marginRight: 3,
      },
    });
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