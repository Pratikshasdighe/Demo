interface Iprops {
  id: number;
  heading: string;
  content: string;
}

const dummyData: Array<Iprops> = [
  {
    id: 1,
    heading: "Calender month",
    content: "Ex:-March-31days,April-30days etc",
  },
  {
    id: 2,
    heading: "Every month 30 days",
    content: "Ex:-March-31days,April-30days etc",
  },
];
export default dummyData;
