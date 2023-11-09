use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Terve,{}!", name));
}

#[wasm_bindgen]
pub fn sum(nums: &[f64]) -> f64{
   nums.iter().sum()
}
#[wasm_bindgen]
pub fn product(nums: &[f64]) -> f64{
   nums.iter().fold(0., |a, e| a * e)
}


#[cfg(test)]
mod tests {
    use super::*;

}
