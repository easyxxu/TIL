import java.io.IOException;
public class Solution {
	public static void main(String[] args) throws IOException{
		StringBuilder sb = new StringBuilder();
		int T = (int) Math.pow(10, 6);
		for(int i=2;i<=T;i++) {
			boolean isPrime = true;
			for(int j=2;j<=Math.sqrt(i);j++) {
				if(i % j == 0) {
					isPrime = false;
					break;
				}
			}
			
			if(isPrime) {
				sb.append(i+" ");
			}
		}
		System.out.print(sb);
	}
}