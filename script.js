//Seating arrangements
function seatnum_type(s){ 
       if (s> 0 && s < 72)
          if (s % 8 == 1 || s % 8 == 4)
              return "is the lower birth"
            else if (s % 8 == 2 ||s % 8 == 5 )
              return "is the middle birth"
            else if (s % 8 == 3 || s % 8 == 6)
              return "is the upper birth"
            else if (s % 8 == 7)
              return "is the side lower birth"
            else
              return "is the side upper birth"
        else
           return "invalid seat number"


}
console.log(seatnum_type(56))
console.log(seatnum_type(34))
console.log(seatnum_type(52))
console.log(seatnum_type(48))
console.log(seatnum_type(11))
