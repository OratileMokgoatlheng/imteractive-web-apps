// scripts.js

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [9, 7, 8, 6],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [10, 8, 3, 12],
          },
          {
            date: '2022-11-25T20:00:00.000Z',
            time: [6, 8, 9, 11],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [10, 11, 4, 8],
          },
          {
            date: '2022-12-09T20:00:00.000Z',
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

// // Only edit below this comment

const createHtml = (athlete) => {
  //  reassign the variables
  const firstName = data.response.data[athlete].firstName;
  const surname = data.response.data[athlete].surname;
  const id = data.response.data[athlete].id;
  
  const fragment = document.createDocumentFragment();
  let title = document.createElement('h2');
  title.textContent = id
  fragment.appendChild(title);

  const races = (data.response.data[athlete].races).length
  const date = new Date(data.response.data[athlete].races[races - 1].date)
  const list = document.createElement('dl');
  const day = date.getDate()
  const month = MONTHS[date.getMonth()];
  const year = date.getFullYear();

  const time = data.response.data[athlete].races[races-1].time;
  let sum = 0
  let i = 0;
  while (i < time.length) {
    sum += time[i]
    i++
  }
  const minutes = sum % 60;
  const hours = (sum - minutes) / 60;
  
  list.innerHTML = /* html */ `
        <dt>Athlete: ${firstName} ${surname}</dt>
        <dt>Total Races: ${races}</dt>
        <dt>Event Date (Latest): ${day.toString().padStart(2, '0')} ${month} ${year}</dt>
        <dt>Total Time (Latest): ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}</dt>
      `;
  fragment.appendChild(list);
  return fragment;
}
// [NM372], [SV782] = data
document.querySelector('[data-athlete = "NM372"]').appendChild(createHtml('NM372'));
document.querySelector('[data-athlete ="SV782"]').appendChild(createHtml('SV782'));



// const createHtml = (athlete) => {}
//   // firstName, surname, id, races = athlete
//   // [date], [time] = races.reverse()

//   const section = document.querySelector('[data-athlete]')
//   const fragment = document.createDocumentFragment();

//   const title = document.createElement('h2');

//   title.textContent = data.response.data.NM372.id


//   fragment.appendChild(title);

//   section.appendChild(fragment)


//   const list = document.createElement('dl');

//   const day = data.response.data.NM372.races[0].date;

//   const month = MONTHS[date.month];
//   const year = date.year;

//   first, second, third, fourth = timeAsArray;
//   total = first + second + third + fourth;

//   const hours = total / 60;
//   const minutes = total / hours / 60;

//   list.innerHTML = /* html */ `
//     <dt>Athlete</dt>
//     <dd>${firstName} ${surname} }</dd>
//     <dt>Total Races</dt>
//     <dd>${races}</dd>

//     <dt>Event Date (Latest)</dt>
//     <dd>${day} ${month} ${year}</dd>

//     <dt>Total Time (Latest)</dt>
//     <dd>${hours.padStart(2, 0)} ${minutes}</dd>
//   `;

//   fragment.appendChild(list);


  //[NM372], [SV782] = data
  //document.querySelector('NM372').appendChild(createHtml('NM372'));
  //document.querySelector('SV782').appendChild(createHtml('SV782'));

/**
 * Understandable code below
 */
