// Biến đổi chuỗi
let schools = "Cao đẳng fpt";

console.log(schools.toLocaleLowerCase());
console.log(schools.toLocaleUpperCase());
console.log(schools);

// Cắt chuỗi
console.log(schools.slice(10, -1));

console.log(schools.substring(0, 7));
console.log(schools.split(" ", 2));

// Bài tập đến xem có bao nhiêu content có bao nhiêu từ
let content = ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis ex
      corrupti non at perferendis dolorum laboriosam sed deleniti, ut adipisci
      autem iusto, temporibus fugit inventore vero in. Adipisci esse dolorum
      veritatis recusandae doloribus aliquid nemo ducimus saepe quibusdam. Iusto
      esse vel enim cupiditate inventore voluptatem dignissimos veniam obcaecati
      veritatis dolorem unde sint earum autem in consectetur, reiciendis aperiam
      itaque. Repellat eum explicabo sit soluta impedit neque corrupti quas
      aspernatur ad, quod eius quidem doloribus consequatur. Exercitationem
      voluptatum quo, nulla necessitatibus molestiae aspernatur voluptates
      voluptate minus quibusdam ad eos, aliquid perspiciatis impedit, ea a! Nam
      sint rerum aut, repellat eos sequi?`;

console.log(content.split(" ").length);

let myStt =
  "Học lập trình tại codefarm cùng thầy hoàng, thầy hoàng dậy js ok lắm";

/** Biến đổi mảng ban đầu thành chuỗi mới từ thầy hoàng thành thầy đông Đổi js thành javascripts */

console.log(myStt.replaceAll("thầy hoàng", "Thầy đông"));
console.log(myStt.replace("js", "JavaScprits"));

console.log(myStt);

console.log({ String });
//interface : giao diện 
