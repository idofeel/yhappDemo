import * as React from 'react';
import {Component} from 'react';
import {ScrollView, Platform} from 'react-native';
import ChatItem from './chat_item';

interface State {}
interface Props {}

interface category {
  cateid: string;
  catename: string;
  item: Item[];
}

interface Item {
  imageurl: string;
  contentid: string;
  cleurl: string;
  title: string;
  size: string;
}

const DATAS: Item[] = [];

const category: category[] = [
  {
    cateid: '1',
    catename: '自行车',
    item: [
      {
        contentid: '1_1',
        title: '动画_自行车',
        size: '11.5MB',
        cleurl: 'http://47.104.188.191/rs_new/donghua/动画_自行车2.cle',
        imageurl: 'http://47.104.188.191/rs_new/donghua/动画_自行车2.jpg',
      },
      {
        contentid: '1_2',
        title: '自行车',
        size: '5.27MB',
        cleurl: 'http://47.104.188.191/rs_new/02/自行车.cle',
        imageurl: 'http://47.104.188.191/rs_new/02/自行车_smart.jpg',
      },
    ],
  },
  {
    cateid: '2',
    catename: '发动机',
    item: [
      {
        contentid: '2_1',
        title: '动画_发动机_透明度',
        size: '5.79MB',
        cleurl: 'http://47.104.188.191/rs_new/donghua/动画_发动机_透明度.cle',
        imageurl: 'http://47.104.188.191/rs_new/donghua/动画_发动机_透明度.jpg',
      },
      {
        contentid: '2_2',
        title: '航空器发动机',
        size: '2.51MB',
        cleurl: 'http://47.104.188.191/rs_new/06/航空器发动机.cle',
        imageurl: 'http://47.104.188.191/rs_new/06/航空器发动机_smart.jpg',
      },
      {
        contentid: '2_3',
        title: '涡轮喷气发动机',
        size: '1.24MB',
        cleurl: 'http://47.104.188.191/rs_new/06/涡轮喷气发动机.cle',
        imageurl: 'http://47.104.188.191/rs_new/06/涡轮喷气发动机_smart.jpg',
      },
    ],
  },
  {
    cateid: '3',
    catename: '飞机',
    item: [
      {
        contentid: '3_1',
        title: '四旋翼无人机',
        size: '0.14MB',
        cleurl: 'http://47.104.188.191/rs_new/04/四旋翼无人机.cle',
        imageurl: 'http://47.104.188.191/rs_new/04/四旋翼无人机_smart.jpg',
      },
      {
        contentid: '3_2',
        title: '无人机',
        size: '1.52MB',
        cleurl: 'http://47.104.188.191/rs_new/04/无人机.cle',
        imageurl: 'http://47.104.188.191/rs_new/04/无人机_smart.jpg',
      },
      {
        contentid: '3_3',
        title: '战斗机',
        size: '1.52MB',
        cleurl: 'http://47.104.188.191/rs_new/04/战斗机.cle',
        imageurl: 'http://47.104.188.191/rs_new/04/战斗机_smart.jpg',
      },
      {
        contentid: '3_4',
        title: '战斗机2',
        size: '2.79MB',
        cleurl: 'http://47.104.188.191/rs_new/04/战斗机2.cle',
        imageurl: 'http://47.104.188.191/rs_new/04/战斗机2_smart.jpg',
      },
    ],
  },
  {
    cateid: '4',
    catename: '坦克',
    item: [
      {
        contentid: '4_1',
        title: 'ZTZ99B主战坦克',
        size: '1.78MB',
        cleurl: 'http://47.104.188.191/rs_new/05/ZTZ99B主战坦克.cle',
        imageurl: 'http://47.104.188.191/rs_new/05/ZTZ99B主战坦克_smart.jpg',
      },
    ],
  },
  {
    cateid: '5',
    catename: '汽车',
    item: [
      {
        contentid: '5_1',
        title: '奔驰',
        size: '5.83MB',
        cleurl: 'http://47.104.188.191/rs_new/03/奔驰.cle',
        imageurl: 'http://47.104.188.191/rs_new/03/奔驰_smart.jpg',
      },
      {
        contentid: '5_2',
        title: '法拉利2',
        size: '4.53MB',
        cleurl: 'http://47.104.188.191/rs_new/03/法拉利2.cle',
        imageurl: 'http://47.104.188.191/rs_new/03/法拉利2_smart.jpg',
      },
      {
        contentid: '5_3',
        title: '甲壳虫宝马',
        size: '3.40MB',
        cleurl: 'http://47.104.188.191/rs_new/03/甲壳虫宝马.cle',
        imageurl: 'http://47.104.188.191/rs_new/03/甲壳虫宝马_smart.jpg',
      },
      {
        contentid: '5_4',
        title: '奇瑞A3',
        size: '2.34MB',
        cleurl: 'http://47.104.188.191/rs_new/03/奇瑞A3.cle',
        imageurl: 'http://47.104.188.191/rs_new/03/奇瑞A3_smart.jpg',
      },
    ],
  },
  {
    cateid: '6',
    catename: '机械设备',
    item: [
      {
        contentid: '6_1',
        title: '军用卡车',
        size: '2.39MB',
        cleurl: 'http://47.104.188.191/rs_new/07/军用卡车.cle',
        imageurl: 'http://47.104.188.191/rs_new/07/军用卡车_smart.jpg',
      },
      {
        contentid: '6_2',
        title: '农用小卡',
        size: '2.89MB',
        cleurl: 'http://47.104.188.191/rs_new/07/农用小卡.cle',
        imageurl: 'http://47.104.188.191/rs_new/07/农用小卡_smart.jpg',
      },
      {
        contentid: '6_3',
        title: '特矿卡',
        size: '4.91MB',
        cleurl: 'http://47.104.188.191/rs_new/07/特矿卡.cle',
        imageurl: 'http://47.104.188.191/rs_new/07/特矿卡_smart.jpg',
      },
    ],
  },
  {
    cateid: '7',
    catename: '流水线',
    item: [
      {
        contentid: '7_1',
        title: '产品转移设备',
        size: '3.22MB',
        cleurl: 'http://47.104.188.191/rs_new/01/流水线产品转移设备.cle',
        imageurl:
          'http://47.104.188.191/rs_new/01/流水线产品转移设备_Smart.jpg',
      },
      {
        contentid: '7_2',
        title: '双层组装生产流水线',
        size: '4.70MB',
        cleurl: 'http://47.104.188.191/rs_new/01/双层组装生产流水线.cle',
        imageurl:
          'http://47.104.188.191/rs_new/01/双层组装生产流水线_smart.jpg',
      },
    ],
  },
];

class ChatList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      //   <ScrollView>
      category.map((item, index) => {
        return item.item.map((i, j) => <ChatItem item={i} key={j} />);
      })
      //   </ScrollView>
    );
  }
}

export default ChatList;
