import React from 'react';
import NewKegForm from './NewKegForm';
import TapList from './TapList';
import KegDetail from './KegDetail';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTapList: [],
      selectedTap: null,
      sell: null
    };
  }

  handleClick = () => {
    if (this.state.selectedTap != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTap: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMainTapList = this.state.mainTapList.concat(newKeg);
    this.setState({
      mainTapList: newMainTapList,
      formVisibleOnPage: false });
  }

  handleChangingSelectedTap = (id) => {
    const selectedTap = this.state.mainTapList.filter(keg => keg.id === id)[0];
    this.setState({selectedTap: selectedTap});
  }

  handleSellClick = () => {
    this.setState({sell: true});
  }

  handleSell = () => {
    this.setState((state, props) => ({
      sell: this.state.sell + props.increment
    }));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedTap !== null) {
      currentlyVisibleState = 
      <KegDetail keg = {this.state.selectedTap}/>
      buttonText = "Return to Tap List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Return to Tap List";
    } else if (this.state.selectedTap != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedTap}/>
      buttonText= "Return to Tap List";
    } else {
      currentlyVisibleState = <TapList tapList={this.state.mainTapList} onKegSelection={this.handleChangingSelectedTap} />
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KegControl;