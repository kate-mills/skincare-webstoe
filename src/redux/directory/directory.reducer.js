const INITIAL_STATE = {
  sections: [
    {
      title: 'cleansers',
      linkUrl: 'cleansers',
      imageUrl: 'https://i.ibb.co/wQ3jwGV/Cleanser.jpg',
      id: 1,
    },{
      title: 'serums',
      linkUrl: 'serums',
      imageUrl: 'https://i.ibb.co/zHhT7sp/Serum.jpg',
      id: 3,
    },{
      title: 'moisturizers',
      linkUrl: 'moisturizers',
      imageUrl: 'https://i.ibb.co/MCvbsT0/Moisture.jpg',
      id: 5,
    },{
      title: 'Eyes & Lips',
      linkUrl: 'eyeslips',
      size: 'large',
      imageUrl: 'https://i.ibb.co/V952dKP/Lips.jpg',
      id: 4,
    },{
      title: 'Specialty',
      linkUrl: 'specialty',
      size: 'large',
      imageUrl: 'https://i.ibb.co/zhLQ8wf/Travel.jpg',
      id: 2,
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    default:
      return state;
  }
}

export default directoryReducer;
