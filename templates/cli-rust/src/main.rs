extern "C" {
  fn log_number(msg: i32);
}

fn main() {}

#[no_mangle]
pub fn square(n: i32) -> i32 {
  unsafe {
    log_number(n);
  }
  n * n
}
