import React, { Component } from "react";
import { connect } from "react-redux";
import "./BaiTapBurger.css";
class BaiTapBurger extends Component {
  addBreadMid = (propBurger) => {
    const action = {
      type: "ADD_BREADMID",
      propBurger,
      payload: 1,
    };
    this.props.dispatch(action);
  };
  minusBreadMid = (propBurger) => {
    const action = {
      type: "MINUS_BREADMID",
      propBurger,
      payload: -1,
    };
    this.props.dispatch(action);
  };
  renderBreadMid = () => {
    let { burger } = this.props;
    // for (let propBurger in burger) {
    //   console.log(propBurger, burger[propBurger]);
    // }
    // return Object.entries(burger).map(([propBurger, value], index) => {
    //   let breadMid = [];
    //   for (let i = 0; i < value; i++) {
    //     breadMid.push(<div key={i} className={propBurger}></div>);
    //   }
    //   return breadMid;
    // });
    let content = [];
    for (let propBurger in burger) {
      let breadMid = [];
      for (let i = 0; i < burger[propBurger]; i++) {
        breadMid.push(<div key={i} className={propBurger}></div>);
      }
      content.push(breadMid);
    }
    return content;
  };
  renderMenu = () => {
    let { menu, burger } = this.props;
    return Object.entries(menu).map(([propMenu, price], index) => {
      return (
        <tr key={index}>
          <td>{propMenu}</td>
          <td>
            <button
              // onClick={() => {
              //   this.props.addBreadMid(propMenu, 1);
              // }}
              onClick={() => {
                this.addBreadMid(propMenu);
              }}
              className="btn btn-success"
            >
              +
            </button>
            {burger[propMenu]}
            <button
              // onClick={() => {
              //   this.props.addBreadMid(propMenu, -1);
              // }}
              onClick={() => {
                this.minusBreadMid(propMenu);
              }}
              className="btn btn-danger"
            >
              -
            </button>
          </td>
          <td>{price}</td>
          <td>{burger[propMenu] * price}</td>
        </tr>
      );
    });
  };
  render() {
    let { menu } = this.props;
    return (
      <div className="container">
        <h3 className="display-4 text-success">Bài tập burger cybersoft</h3>
        <div className="row">
          <div className="col-7">
            <h3 className="text-center text-danger">Bánh burger của bạn</h3>
            <div className="breadTop"></div>
            {this.renderBreadMid()}
            <div className="breadBottom"></div>
          </div>
          <div className="col-5">
            <table className="table">
              <thead>
                <tr>
                  <td>Thức ăn</td>
                  <td></td>
                  <td>Đơn giá</td>
                  <td>Thành Tiền</td>
                </tr>
                {this.renderMenu()}
              </thead>
              <tfoot>
                <tr>
                  <td></td>
                  <td></td>
                  <td>Tổng cộng</td>
                  <td>{this.props.total}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  burger: state.BurgerReducer.burger,
  menu: state.BurgerReducer.menu,
  total: state.BurgerReducer.total,
});
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addBreadMid: (propBurger, amount) => {
//       const action = {
//         type: "ADD_BREADMID",
//         propBurger,
//         amount,
//       };
//       dispatch(action);
//     },
//   };
// };
export default connect(mapStateToProps)(BaiTapBurger);
