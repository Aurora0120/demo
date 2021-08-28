let date: Date = new Date();
let weekday: number = date.getDay(); // 取得今日的星期，取值1-7
let month: number = date.getMonth(); // 取得今日的月份，取值0-11

// 1. 题面：分别使用if和switch结构，输出"今天是星期几(要求使用中文)"
/**
 * 1. =号在编程语言中是赋值的意思
 * 2. ==号是先转换类型后比较
 *   undefined == null;
 *   true == 1;
 *   1 == '1';
 *   [] == 0;
 * 3. ===号是先比较类型再比较值，所以只有===是恒等
 *   undefined === null;
 *   true === 1;
 *   1 === '1';
 *   [] === 0;
 */
/**
 * if (weekday === 1 ) {
 *   console.log(‘今天是星期一’);
 * } else if (weekday === 2 ) {
 *   console.log(‘今天是星期二’);
 * } else if (weekday === 3 ) {
 *   console.log(‘今天是星期三');
 * } else if (weekday === 4 ) {
 *   console.log(‘今天是星期四’);
 * } else if (weekday === 5 ) {
 *   console.log(‘今天是星期五’);
 * } else if (weekday === 5 ) {
 *   console.log(‘今天是星期五’);
 * }else if (weekday === 6 ) {
 *   console.log(‘今天是星期六’);
 * } else {
 *   console.log(‘今天是星期天’);
 * }
 */
if ((weekday = 1)) {
    console.log('星期一');
} else if ((weekday = 2)) {
    console.log('星期二');
} else if ((weekday = 3)) {
    console.log('星期三');
} else if ((weekday = 4)) {
    console.log('星期四');
} else if ((weekday = 5)) {
    console.log('星期五');
} else if ((weekday = 6)) {
    console.log('星期六');
} else {
    console.log('星期天');
}

/**
 * switch(weekday) {
 *   case 1:
 *     console.log(‘今天是星期一’);
 *     break;
 *   case 2:
 *     console.log(‘今天是星期二’);
 *     bre
 *   case 3:
 *     console.log(‘今天是星期三’);
 *     break;
 *   case 4:
 *     console.log(‘今天是星期四’);
 *     break;
 *   case 5:
 *     console.log(‘今天是星期五’);
 *     break;
 *   case 6:
 *     console.log(‘今天是星期六’);
 *     break;
 *   default:
 *     console.log(‘今天是星期天’);
 * }
 */

switch (weekday == 1) {
    case true:
        console.log('星期一');
        break;
    case weekday == 2:
        console.log('星期二');
        break;
    case weekday == 3:
        console.log('星期三');
        break;
    case weekday == 4:
        console.log('星期四');
        break;
    case weekday == 5:
        console.log('星期五');
        break;
    case weekday == 6:
        console.log('星期六');
        break;
    default:
        console.log('星期天');
}

// 2. 题面：给出一个年份，判断是否闰年
let year: number = 2000;
if (year % 4 === 0) {
    console.log('普通闰年');
}
// 3. 题面：给出三个数，求极值

// 4. 题面：判断本月份有多少天
