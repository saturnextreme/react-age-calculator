
export const AgeCalculator = (cd, cm, cy) => {
    cd = parseInt(cd);
    cm = parseInt(cm);
    cy = parseInt(cy);
    let date = new Date();
    let y = date.getFullYear();
    let m = date.getMonth();
    let d = date.getDate();
    d = Math.abs(cd - d);
    if (cm < m) {
      m = cm - m - 1;
      y = Math.abs(cy - y - 1) - 1
    } else {
      m = cm - 12 - m - 1;
      y = Math.abs(cy - y) - 1
    }
    m = Math.abs(m);
    
    console.log(d, m, y)
    return [d, m, y];
  }