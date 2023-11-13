import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Solution {
	// 1225 암호생성기
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st;
		
		for(int i=1;i<=10;i++) {
			int T = Integer.parseInt(br.readLine());
			st = new StringTokenizer(br.readLine());
			int[] numbers = new int[8];
			for(int j=0;j<8;j++) {
				int num = Integer.parseInt(st.nextToken());
				numbers[j] = num;
			}
			int k = 1;
			while(numbers[numbers.length - 1] != 0) {
					numbers[0] -= k; // 감소
					if(numbers[0] <= 0) {
						numbers[0] = 0;
					}
					
					int lastNum = numbers[numbers.length - 1];
					numbers[numbers.length - 1] = numbers[0]; // 뒤로 이동
					
					for(int n = 0; n<7;n++) {
						numbers[n] = numbers[n+1];
						if(n == 6) {
							numbers[n] = lastNum;
						}
					}
					k++;
					if(k == 6) {
						k=1;
					}
			}
			
			sb.append("#"+i+" ");
			for(int j=0;j<8;j++) {
				sb.append(numbers[j]+" ");
			}
			sb.append("\n");
		}
		System.out.print(sb);
	}
}